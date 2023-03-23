package main

import (
	"fmt"
	"log"
	"native-go-api/db"
	"native-go-api/handler"
	"native-go-api/models"
	"net/http"
	"os"
)

// CORS OPTIONS
func setupCorsResponse(w *http.ResponseWriter, req *http.Request) {
	(*w).Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
	(*w).Header().Set("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS")
	(*w).Header().Set("Access-Control-Allow-Headers", "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization")
	(*w).Header().Set("Access-Control-Allow-Credentials", "true")
}

func main() {
	log.Print("This Server Running on localhost port 8080")

	// initialize the database
	db.Moviedb["001"] = models.Movie{ID: "001", Title: "A Space Odyssey", Description: "Science fiction"}
	db.Moviedb["002"] = models.Movie{ID: "002", Title: "Citizen Kane", Description: "Drama"}
	db.Moviedb["003"] = models.Movie{ID: "003", Title: "Raiders of the Lost Ark", Description: "Action and adventure"}
	db.Moviedb["004"] = models.Movie{ID: "004", Title: "66. The general", Description: "Comedy"}

	// route goes here

	// test route
	http.HandleFunc("/api", func(w http.ResponseWriter, r *http.Request) {
		setupCorsResponse(&w, r)
		if r.Method == "OPTIONS" {
			return
		}
		handler.TestHandler(w, r)
	}) // get movies
	http.HandleFunc("/api/movies", func(w http.ResponseWriter, r *http.Request) {
		setupCorsResponse(&w, r)
		if r.Method == "OPTIONS" {
			return
		}
		handler.GetMovies(w, r)
	})
	// get a single movie
	http.HandleFunc("/api/movie", func(w http.ResponseWriter, r *http.Request) {
		setupCorsResponse(&w, r)
		if r.Method == "OPTIONS" {
			return
		}
		handler.GetMovie(w, r)
	})
	// add movie
	http.HandleFunc("/api/movie/add", func(w http.ResponseWriter, r *http.Request) {
		setupCorsResponse(&w, r)
		if r.Method == "OPTIONS" {
			return
		}
		handler.AddMovie(w, r)
	})
	// delete movie
	http.HandleFunc("/api/movie/delete", func(w http.ResponseWriter, r *http.Request) {
		setupCorsResponse(&w, r)
		if r.Method == "OPTIONS" {
			return
		}
		handler.DeleteMovie(w, r)
	})

	// listen port
	err := http.ListenAndServe(":8080", nil)
	// print any server-based error messages
	if err != nil {
		fmt.Println(err)
		os.Exit(1)
	}
}
