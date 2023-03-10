package handler

import (
	"native-go-api/utils"
	"net/http"
)

// root api test handler
func TestHandler(res http.ResponseWriter, req *http.Request) {

	// Add the response return message
	HandlerMessage := []byte(`{
	"success": true,
	"message": "The server is running properly"
	}`)

	utils.ReturnJsonResponse(res, http.StatusOK, HandlerMessage)
}

// Get Movies Handler
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
}
