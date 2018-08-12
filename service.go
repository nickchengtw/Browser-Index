package main

import (
	"net/http"
	"fmt"
	"log"
	"io/ioutil"
)

func loadRes(path string) ([]byte) {
	b, err := ioutil.ReadFile(path)
	if err != nil {
		fmt.Println(err)
	}
	return b
}

func router(w http.ResponseWriter, r *http.Request)  {
	 url := r.URL.Path
	 switch url {
	 case "/index":
	 	indexHandler(w, r)
	 default:
		 srcHandler(w, r)
	}
}

func indexHandler(w http.ResponseWriter, r *http.Request)  {
	fmt.Println("req index")
	data := loadRes("./index.html")
	w.Write(data)
}

func srcHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Println("req src")
	srcUrl := "." + r.URL.Path
	content := loadRes(srcUrl)
	if srcUrl[len(srcUrl)-4:] == ".css" {
		w.Header().Set("Content-Type", "text/css")
	}
	w.Write(content)
}

func main() {
	var port string = "8066"

	http.HandleFunc("/", router)
	fmt.Println("server start at port " + port)
	log.Fatal(http.ListenAndServe(":" + port, nil))
}
