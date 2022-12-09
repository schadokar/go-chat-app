# Kayee... Chat Application

A detailed article is published on [Medium](https://levelup.gitconnected.com/create-a-chat-application-in-golang-with-redis-and-reactjs-c75611717f84).


![](kayee.png)

## Setup

- Clone the repository `git clone https://github.com/schadokar/go-chat-app.git`
- Run `go mod tidy` to install all the GO dependencies.
- Open the `client` directory and install the frontend dependecies
  ```bash
  cd client
  npm install
  ```

## Run the Application
Open three terminals in the repository root

### Terminal 1
Start HTTP server
```bash
go run main.go --server=http
```

### Terminal 2
Start WebSocket server

```bash
go run main.go --server=websocket
```

### Terminal 3
Start the frontend

```bash
cd client
npm start
```

The application is now available at http://localhost:3000. 

![](https://github.com/schadokar/go-chat-app/blob/main/Videos%20(1).gif)
