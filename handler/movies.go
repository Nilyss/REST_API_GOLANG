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
