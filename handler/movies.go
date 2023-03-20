package handler

import (
	"encoding/json"
	"native-go-api/db"
	"native-go-api/models"
	"native-go-api/utils"
	"net/http"
)

// TestHandler root api
func TestHandler(res http.ResponseWriter, req *http.Request) {

	// Add the response return message
	HandlerMessage := []byte(`{
		"success": true,
		"message": "The server is running properly"
	}`)

	utils.ReturnJsonResponse(res, http.StatusOK, HandlerMessage)
}

// GetMovies Handler
func GetMovies(res http.ResponseWriter, req *http.Request) {
	if req.Method != "GET" {

		// Add the response return message
		HandlerMessage := []byte(`{
			"success": false,
			"message": "Check your HTTP method: Invalid HTTP method executed",
		}`)

		utils.ReturnJsonResponse(res, http.StatusMethodNotAllowed, HandlerMessage)
		return
	}

	var movies []models.Movie

	for _, movie := range db.Moviedb {
		movies = append(movies, movie)
	}

	// parse the movie data into json format
	movieJSON, err := json.Marshal(&movies)
	if err != nil {
		// Add the response return message
		HandlerMessage := []byte(`{
			"success": false,
			"message": "Error parsing the movie data",
		}`)

		utils.ReturnJsonResponse(res, http.StatusInternalServerError, HandlerMessage)
		return
	}

	utils.ReturnJsonResponse(res, http.StatusOK, movieJSON)
}

// Get a single movie handler
func getMovie(res http.ResponseWriter, req *http.Request) {

	if req.Method != "GET" {
		// Add the response return message
		HandlerMessage := []byte(`{
			"success": false,
			"message": "Check your HTTP method: Invalid HTTP method executed",
		}`)

		utils.ReturnJsonResponse(res, http.StatusMethodNotAllowed, HandlerMessage)
		return
	}

	if _, ok := req.URL.Query()["id"]; !ok {
		// Add the response return message
		HandlerMessage := []byte(`{
			"success": false,
			"message": "This method requires the movie id",
		}`)
		utils.ReturnJsonResponse(res, http.StatusInternalServerError, HandlerMessage)
		return
	}

	id := req.URL.Query()["id"][0]

	movie, ok := db.Moviedb[id]

	if !ok {
		// Add the response return message
		HandlerMessage := []byte(`{
			"success": false,
			"message": "Requested movie not found",
		}`)

		utils.ReturnJsonResponse(res, http.StatusNotFound, HandlerMessage)
		return
	}

	// parse the movie data into json format
	movieJSON, err := json.Marshal(&movie)
	if err != nil {
		// Add the response return message
		HandlerMessage := []byte(`{
			"success": false,
			"message": "Error parsing the movie data",
		}`)

		utils.ReturnJsonResponse(res, http.StatusInternalServerError, HandlerMessage)
		return
	}

	utils.ReturnJsonResponse(res, http.StatusOK, movieJSON)
}
