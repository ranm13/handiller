# Handiller

## **Description**
Application that has users of 2 types: supplier & customer, that can coordinate meeting between them. The customer can search supplier by category.

## **Technologies**
*	React
*	MobX
*	Node.js
*	Express
*	MySQL

## **Tabels**

* EMPTY

## **Routes**

### *GET Routes*
* Get: '/login/:id' 
    * Req: TBD
    * Res: TBD

* Get: client/details/:clientId
    * Req: Number
    * Res: {}
	    * firstName: String
	    * lastName: String
	    * email: String
	    * phone: Number
	    * address: String
	    * city: String
        * region: String

* Get: prof/details/:profId
    * Req: Number
    * Res: {}
	    * firstName: String
	    * lastName: String
	    * email: String
	    * phone: Number
	    * address: String
	    * city: String
        * regions: [region]
	    * profession: String
	    * description: String

* Get: general/professionals
    * Req: EMPTY
    * Res: [String]

* Get: client/searchProfs/:professionalName/:region
    * Req:  
        * PARAMS
            * professionalName: String
            * region: String
    * Res: [ {} ]
        * profId: Number
        * firstName: String
        * lastName: String
        * email: String
        * phone: Number
        * address: String
        * city: String
        * profession: String
        * description: String

* Get: /appointment/:id?isClient
    * Req
        * PARAMS - id: Number
        * QUERY – isClient: Boolean
    * Res: {}
        * appointmentStatus: String
        * startDate: String (DD/MM/YYYY - HH:MM)
        * endDate: String (DD/MM/YYYY - HH:MM)
        * title: String
        * clientId: Number
        * profId: Number
        
* Get: /appointments/:id
    * Req
        * PARAMS - id: Number
        * QUERY – isClient: Boolean
    * Res: [ {} ]
        * appointmentStatus: String
        * startDate: String (DD/MM/YYYY - HH:MM)
        * endDate: String (DD/MM/YYYY - HH:MM)
        * title: String
        * clientId: Number
        * profId: Number

* Get: /cities
    * Req: EMPTY
    * Res: [String]

* Get: /regions
    * Req: EMPTY
    * Res: [String]

* Get: /citiesByRegion/:region
    * Req: String
    * Res: [String]

* Get: /regionByCity/:city
    * Req: String
    * Res: String


### *POST Routes*

* Post: '/signup' 
    * Req: TBD
    * Res: TBD


* Post: /appointment
    * Req: 
        * appointmentStatus: String
        * startDate: String (DD/MM/YYYY - HH:MM)
        * endDate: String (DD/MM/YYYY - HH:MM)
        * title: String
        * clientId: Number
        * profId: Number
    * Res: EMPTY

### *PUT Routes*
* Put: /update-status/:appointmentId
    * Req: Number
    * Res: {}
        * status: String
        * startDate: Date
        * endDate: Date
        * title: String
        * clientId: Number
        * ProfId: Number

* Put: /settings/:id?isClient
    * Req
        * PARAMS - id: Number
        * QUERY – isClient: Boolean
        * BODY: (All the body is optional – can be empty)
            * firstName: String
            * lastName: String
            * email: String
            * phone: Number
            * password: Number
            * address: String
            * city: String
            * profession: String
            * description: String
    * Res: EMPTY
