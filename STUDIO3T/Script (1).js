use Test
db.createCollection("newCollectionTest")
doc={
    title: "What is the best way to learn JavaScript from the ground up?",
  postId: NumberInt(3511),
  comments: 10,
  shared: true,
  tags: [
    "JavaScript",
    "programming"
  ],
  author: {
    name: "Mike Forester",
    nickname: "mikef"
  }
}
db.newCollectionTest.insertOne(doc)