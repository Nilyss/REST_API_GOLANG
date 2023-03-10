package utils

import (
	"net/http"
)

// ReturnJsonResponse function for returning movies data in JSON format

func ReturnJsonResponse(res http.ResponseWriter, httpCode int, resMessage []byte) {
	res.Header().Set("Content-Type", "application/json")
	res.WriteHeader(httpCode)
	res.Write(resMessage)
}
