# Aggregating Airlines Collection

1. How many records does each airline class have? Use \$project to show result as { class: "Z", total: 999 }
   _Answer:_
   `db.airlines.aggregate([{$group:{_id:'$class',total:{$sum:1}}}, {$project:{_id:0,class:'$_id',total:'$total'}}])`

>     { "class" : "L", "total" : 23123 }
>     { "class" : "F", "total" : 140343 }
>     { "class" : "G", "total" : 17499 }
>     { "class" : "P", "total" : 5683 }

2. What are the top 3 destination cities outside of the United States (destCountry field, not included) with the highest average passengers count? Show result as { "avgPassengers" : 2312.380, "city" : "Minsk, Belarus" }
   _Answer:_
   `db.airlines.aggregate([{'$match':{'destCountry':{'$not':{'$eq':'United States'}}}},{'$group':{'_id':{'city':'$destCity'},'avgPassengers':{'$avg':'$passengers'}}},{'$project':{'_id':0,'city':'$_id.city','avgPassengers':1}},{'$sort':{'avgPassengers':-1}},{'$limit':3}])`

>     { "avgPassengers" : 8052.380952380952, "city" : "Abu Dhabi, United Arab Emirates" }
>     { "avgPassengers" : 7176.596638655462, "city" : "Dubai, United Arab Emirates" }
>     { "avgPassengers" : 7103.333333333333, "city" : "Guangzhou, China" }

3. Which carriers provide flights to Latvia (destCountry)? Show result as one document {"\_id" : "Latvia", "carriers" : [ "carrier1", " carrier2", …] }
   _Answer:_
   `db.airlines.aggregate([{$match:{destCountry:'Latvia'}},{$group:{_id:'$destCountry',carriers:{$addToSet:'$carrier'}}}]`

>  { "_id" : "Latvia", "carriers" : [ "Uzbekistan Airways", "JetClub AG", "Blue Jet SP Z o o" ] }

4. What are the carriers which flue the most number of passengers from the United State to either Greece, Italy or Spain? Find top 10 carriers, but provide the last 7 carriers (do not include the first 3). Show result as { "\_id" : "<carrier>", "total" : 999}
   _Answer:_
   `db.airlines.aggregate([{$match:{$or:[{destCountry:'Spain'},{destCountry:'Greece'},{destCountry:'Italy'}]}},{$group:{_id:'$carrier',total:{$sum:'$passengers'}}},{$sort:{total: -1}},{$limit:10},{$skip:3}])`

>     { "_id" : "Compagnia Aerea Italiana", "total" : 280256 }
>     { "_id" : "United Air Lines Inc.", "total" : 229936 }
>     { "_id" : "Emirates", "total" : 100903 }
>     { "_id" : "Air Europa", "total" : 94968 }
>     { "_id" : "Meridiana S.p.A", "total" : 20308 }
>     { "_id" : "Norwegian Air Shuttle ASA", "total" : 13344 }
>     { "_id" : "VistaJet Limited", "total" : 183 }

5. Find the city (originCity) with the highest sum of passengers for each state (originState) of the United States (originCountry). Provide the city for the first 5 states ordered by state alphabetically (you should see the city for Alaska, Arizona and etc). Show result as {"totalPassengers" : 999, "location" : { "state" : "abc", "city" : "xyz"
   } }
   _Answer:_
   `db.airlines.aggregate([{'$match':{'originCountry':'United States'}},{'$group':{'_id':{'city':'$originCity','state':'$originState'},'sumPassengers':{'$sum':'$passengers'}}},{'$sort':{'sumPassengers':-1}},{'$group':{'_id':{'state':'$_id.state'},'totalPassengers':{'$max':'$sumPassengers'},'city':{'$first':'$_id.city'}}},{'$sort':{'_id.state':1}},{'$limit':5},{'$project':{'_id':0,'totalPassengers':1,'location':{'city':'$city','state':'$_id.state'}}}])`

>     { "totalPassengers" : 760120, "location" : { "city" : "Birmingham, AL", "state" : "Alabama" } }
>     { "totalPassengers" : 1472404, "location" : { "city" : "Anchorage, AK", "state" : "Alaska" } }
>     { "totalPassengers" : 13152753, "location" : { "city" : "Phoenix, AZ", "state" : "Arizona" } }
>     { "totalPassengers" : 571452, "location" : { "city" : "Little Rock, AR", "state" : "Arkansas" } }
>     { "totalPassengers" : 23701556, "location" : { "city" : "Los Angeles, CA", "state" : "California" } }

# Aggregating Enron Collection

 - Which pair of people have the greatest number of messages in the dataset?
_Answer:_
`db.enron.aggregate([{$project:{from:'$headers.From',to:{"$setUnion":["$headers.To",[]]}}},{$unwind:{path:"$to"}},{$group:{_id:{from:"$from",to:"$to"},total:{$sum:1}}},{$sort:{total:-1}},{$limit:1}])`

>     { "_id" : { "from" : "susan.mara@enron.com", "to" : "jeff.dasovich@enron.com" }, "total" : 750 }
