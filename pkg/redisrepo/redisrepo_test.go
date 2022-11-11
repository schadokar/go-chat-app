package redisrepo

import (
	"context"
	"fmt"
	"testing"
	"time"

	"github.com/joho/godotenv"
)

func init() {
	godotenv.Load("../../.env")
}

func TestUpdateContactList(t *testing.T) {
	InitialiseRedis()
	defer redisClient.Close()

	for i := 4; i < 20; i++ {
		UpdateContactList("user1", fmt.Sprintf("user%d", i))
		time.Sleep(time.Second * 2)
	}
}

func TestFetchContactList(t *testing.T) {
	InitialiseRedis()
	defer redisClient.Close()

	res, err := FetchContactList("user1")
	if err != nil {
		t.Error("error in fetch", err)
		return
	}

	t.Log("success", res)
}

func TestFetchChatBetween(t *testing.T) {
	InitialiseRedis()
	defer redisClient.Close()

	res, err := FetchChatBetween("user1", "user2", "0", "+inf")

	if err != nil {
		t.Error("error in fetch", err)
		return
	}

	t.Log("success", res)
}

func TestIndexExist(t *testing.T) {
	InitialiseRedis()
	defer redisClient.Close()
	res, err := redisClient.Do(context.Background(),
		"FT._LIST",
	).Result()

	fmt.Printf("%T\n", res.([]interface{})[0])
	t.Log(res, err)
	fmt.Println(res.([]interface{})[0])
}

// func TestDropIndex(t *testing.T) {
// 	InitialiseRedis()
// 	defer redisClient.Close()
// 	res, err := redisClient.Do(context.Background(),
// 		"FT.DROP",
// 		key.ChatIndex(),
// 	).Result()

// 	t.Log(res, err)

// }

// func TestFetchChat(t *testing.T) {
// 	// InitialiseRedis()
// 	// defer redisClient.Close()

// 	c := redisearch.NewClient(fmt.Sprintf("%v:%v", os.Getenv("REDIS_HOST"), os.Getenv("REDIS_PORT")), "myIndex")

// 	docs, total, err := c.Search(redisearch.NewQuery("hello world"))

// 	fmt.Println(docs, total, err)
// }

// func TestCreateIndex(t *testing.T) {
// 	InitialiseRedis()
// 	defer redisClient.Close()

// 	res, err := redisClient.Do(context.Background(),
// 		"FT.CREATE",
// 		key.ChatIndex(),
// 		"ON", "JSON",
// 		"PREFIX", "1", "chat#",
// 		"SCHEMA", "$.from", "AS", "from", "TAG",
// 		"$.to", "AS", "to", "TAG",
// 		"$.timestamp", "AS", "timestamp", "NUMERIC",
// 	).Result()

// 	fmt.Println(res, err)
// }

func TestCreateSortableIndex(t *testing.T) {
	InitialiseRedis()
	defer redisClient.Close()

	res, err := redisClient.Do(context.Background(),
		"FT.CREATE",
		"idx#chats",
		"ON", "JSON",
		"PREFIX", "1", "chat#",
		"SCHEMA", "$.from", "AS", "from", "TAG",
		"$.to", "AS", "to", "TAG",
		"$.timestamp", "AS", "timestamp", "NUMERIC", "SORTABLE",
	).Result()

	fmt.Println(res, err)
}

// func TestCreateIndexFrom(t *testing.T) {
// 	InitialiseRedis()
// 	defer redisClient.Close()

// 	res, err := redisClient.Do(context.Background(),
// 		"FT.CREATE",
// 		key.CreateChatIndex()+":from",
// 		"ON", "JSON",
// 		"PREFIX", "1", "chat#",
// 		"SCHEMA", "$.from", "AS", "from", "TAG",
// 	).Result()

// 	fmt.Println(res, err)
// }
