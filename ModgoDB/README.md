# Section 3. Querying Restaurants Collection

1. How many “Chinese” (cuisine) restaurants are in “Queens” (borough)?
   _Answer:_
   **728** `db.restaurants.find( { $and: [ { cuisine: { $eq: "Chinese" } }, { borough: { $eq: "Queens"} } ] }).count()`

2. What is the \_id of the restaurant which has the grade with the highest ever score?
   _Answer:_
   **{ "restaurant_id" : "40372466" }** `db.restaurants.find({},{restaurant_id: 1, _id: 0}).sort({"grades.score": -1 }).limit(1)`

3. Add a grade { grade: "A", score: 7, date: ISODate() } to every restaurant in “Manhattan” (borough).
   _Answer:_
   **{ "acknowledged" : true, "matchedCount" : 10259, "modifiedCount" : 10259 }** `db.restaurants.updateMany({ borough: { $eq: "Manhattan" } }, { $push: { grades: { grade: "A", score:7, date: ISODate() }}})`

4. What are the names of the restaurants which have a grade at index 8 with score less then 7? Use projection to include only names without \_id.
   _Answer:_
   **{ "name" : "Silver Krust West Indian Restaurant" } { "name" : "Pure Food" }** `db.restaurants.find({ 'grades.8.score': { $lt: 7 } }, { name: 1, _id: 0 }})`

5. What are \_id and borough of “Seafood” (cuisine) restaurants which received at least one “B” grade in period from 2014-02-01 to 2014-03-01? Use projection to include only \_id and borough.
   _Answer:_
   `db.restaurants.find({ $and: [{cuisine: 'Seafood'}, {'grades.grade': "B"}, {'grades.date': {$gte: new Date('2014-02-01')}}, {'grades.date': {$lt: new Date('2014-03-01')}}]}, { borough: 1 })`

# Section 4. Indexing Restaurants Collection

1. Create an index which will be used by this query and provide proof (from explain() or Compass UI) that the
   index is indeed used by the winning plan:
   db.restaurants.find({ name: "Glorious Food" })
   _Answer:_
   `db.restaurants.createIndex({ name: 1 })`

2. Drop index from task 4.1
   _Answer:_
   `db.restaurants.dropIndex({ name: 1 })` or `db.restaurants.dropIndexes()`

3. Create an index to make this query covered and provide proof (from explain() or Compass UI) that it is
   indeed covered:
   db.restaurants.find({ restaurant_id: "41098650" }, { \_id: 0, borough: 1 })
   _Answer:_
   `db.restaurants.createIndex({ restaurant_id: 1 })`

4. Create a partial index on cuisine field which will be used only when filtering on borough equal to “Staten
   Island”:
   db.restaurants.find({ borough: "Staten Island", cuisine: "American" }) – uses index
   db.restaurants.find({ borough: "Staten Island", name: "Bagel Land" }) – does not use index
   db.restaurants.find({ borough: "Queens", cuisine: "Pizza" }) – does not use index
   _Answer:_
   `db.restaurants.dropIndexes()` - drop all indexes from previuos tasks
   `db.restaurants.createIndex( { cuisine: 1 }, { partialFilterExpression: { "borough": "Staten Island" } } } )`

5. Create an index to make query from task 3.4 covered and provide proof (from explain() or Compass UI) that
   it is indeed covered
   _Answer:_
   `db.restaurants.dropIndexes()` - drop all indexes from previuos tasks

    before:

    >       "winningPlan" : {
    >                             "stage" : "PROJECTION_SIMPLE",
    >                             "transformBy" : {
    >                                     "name" : 1,
    >                                     "_id" : 0
    >                             },
    >                             "inputStage" : {
    >                                     "stage" : "COLLSCAN",
    >                                     "filter" : {
    >                                             "grades.8.score" : {
    >                                                     "$lt" : 7
    >                                             }
    >                                     },
    >                                     "direction" : "forward"
    >                             }
    >                     },


    `db.restaurants.createIndex({ "grades.8.score": 1}, {partialFilterExpression:{"grades.8.score": {$lt:7}}})`
    after:

    > "winningPlan" : {
    >                         "stage" : "PROJECTION_SIMPLE",
    >                         "transformBy" : {
    >                                 "name" : 1,
    >                                 "_id" : 0
    >                         },
    >                         "inputStage" : {
    >                                 "stage" : "FETCH",
    >                                 "inputStage" : {
    >                                         "stage" : "IXSCAN",
    >                                         "keyPattern" : {
    >                                                 "grades.8.score" : 1
    >                                         },
    >                                         "indexName" : "grades.8.score_1",
    >                                         "isMultiKey" : false,
    >                                         "multiKeyPaths" : {
    >                                                 "grades.8.score" : [ ]
    >                                         },
    >                                         "isUnique" : false,
    >                                         "isSparse" : false,
    >                                         "isPartial" : true,
    >                                         "indexVersion" : 2,
    >                                         "direction" : "forward",
    >                                         "indexBounds" : {
    >                                                 "grades.8.score" : [
    >                                                         "[-inf.0, 7.0)"
    >                                                 ]
    >                                         }
    >                                 }
    >                         }
    >                 },
