# Petrichor 🪴🌿

## Plant Endpoints

| Endpoint | Method | Description            |
| -------- | ------ | ---------------------- |
| `/get-plants`  | `GET`  | This endpoint returns an array of all plants. |
| `/get-plant/:plantId`  | `GET`  | This endpoint returns the plant object based on the provided `plantId`. |



## User Endpoints

| Endpoint | Method | Description            |
| -------- | ------ | ---------------------- |
| `/get-user/:userId`  | `GET`  | This endpoint returns the user object based on the provided `userId`. |
| `/login-user`  | `POST`  | This endpoint accepts data in the body and checks whether the user is new. If the user exists, it returns the existing user data. If the user is new, it creates a new user and returns the created user data. |
| `/delete-user/:userId`  | `DELETE`  | This endpoint deletes an existing user based on the provided `userId`. |



## (User) Houseplant Endpoints

| Endpoint | Method | Description            |
| -------- | ------ | ---------------------- |
| `/add-user-plant`  | `POST`  | This endpoint accepts plant and user data in the body and checks if the user exists. If the user exists, it adds a new houseplant to the user and returns the updated user data. |
| `/update-single-houseplant`  | `PATCH`  | This endpoint accepts plant and user data in the body and checks if the user/houseplant exists. If they both exist, it updates the houseplant with the additional data and returns the user details. This endpoint updates the following houseplant fields: `nickname`, `lastWatered`, `wateringFrequency`, `nextWatering`, `room`. |
| `/update-plant-room`  | `PATCH`  | This endpoint accepts the houseplant `_id` and user `_id` and new `room` data in the body and checks if the user/houseplant exists. If they both exist, it updates the houseplant with the new room and returns the user details. This endpoint only updates the `room` field. |
| `/water-plant`  | `PATCH`  | This endpoint accepts the houseplant `_id` and user `_id` data in the body and checks if the user/houseplant exists. If they both exist, it sets the `lastWatered` field to the current date and updates the `nextWatering` date according to the houseplant's `wateringFrequency`.|
| `/snooze-plant`  | `PATCH`  | This endpoint accepts the houseplant `_id` and user `_id` data in the body and checks if the user/houseplant exists. If they both exist, it updates the `nextWatering` date according to the user's `snooze` value. If the plant is overdue (i.e. `nextWatering` date is in the past), it adds the snooze value to the current date.|
| `/set-snooze`  | `PATCH`  | This endpoint accepts the user `_id` and `snooze` duration data in the body and checks if the user exists. If they exist, it updates the `snooze` field according to the provided snooze duration. This value is applied to all snoozed houseplants.|
| `/delete-user-plant/:houseplant_id?_id=userId`  | `DELETE`  | This endpoint deletes an existing user houseplant based on the provided houseplant `_id`. This endpoint takes an additional `_id` query that corresponds to the user's `_id`. Note: This **does not** use the original base plant `_id` from the `plants` collection.  |
| `/delete-user-plants/:userId`  | `DELETE`  | This endpoint removes all houseplants from the user's `houseplants` array. |


---

## `plants` collection (plants.json) 
```json
[
    {
        "_id": "",//
        "commonName": "",
        "botanicaName": "",
        "additionalNames": [""],
        "family": "", // Araceae, Bromeliaceae, Cactus/Succulent, etc., 
        "wateringFrequency": 7, // in days - most start at 7
        "humidiyLevel": "", // dry, average, humid
        "sunlightRequirements": "", // bright-indirect, partial shade, low
        "soilRequirements": "", // normal, normal + peat, sandy, moist, none
        "petFriendly": "", // yes, no
        "imgSrc": ""
    }
]
```
## `users` collection (created on first login)
```json
[
    {
        "_id": "",
        "dateJoined": "",
        "given_name": "",
        "family_name": "",
        "email": "",
        "houseplants": [ 
            {
                "_id": "",//New houseplant ID
                ...basePlantInfo
                "plantId": "",//Global plant ID (same as Plants collection)
                "dateAdded": "",
                "nickname": "",
                "lastWatered": "",
                "wateringFrequency": "",
                "nextWatering": "",
                "room": "",
            }, 
            {
                "_id": "",
                ...basePlantInfo
                "plantId": "",
                "dateAdded": "",
                "nickname": "",
                "lastWatered": "",
                "wateringFrequency": "",
                "nextWatering": "",
                "room": "",
            }, 
        ],
        "home": { 
            "bathroom":"Bathroom",
            "basement":"Basement",
            "bedroom":"Bedroom",
            "entrance":"Entrance",
            "kitchen":"Kitchen",
            "livingRoom":"Living room",
            "office":"Office",
            "studio":"Studio",
            "tvRoom":"TV room",
            "other":"Other"
        },
        "snooze": 3,
    },
]
```
---

## Attribution

<a href="https://www.flaticon.com/free-icons/leaf" title="leaf icons">Leaf icons created by Freepik - Flaticon</a>
<br>
<a href="https://feey.ch/" title="feey">Plant images by Freepik - Unsplash</a>