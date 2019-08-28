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
        * description: Stringr

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
        
* Get: general/appointments/:id
    * Req
        * PARAMS - id: Number
        * QUERY – isClient: Boolean
    * Res: [ {} ]
        * appointmentId: Number
        * appointmentStatus: String (Pending, Approve, Declined, Completed)
        * startDate: Date
        * endDate: Date
        * title: String
        * clientId: Number
        * profId: Number

* Get: general/cities
    * Req: EMPTY
    * Res: [String]

* Get: general/regions
    * Req: EMPTY
    * Res: [String]

* Get: general/professionals
    * Req: EMPTY
    * Res: [String]


### *POST Routes*

* Post: /signup
    * Req: TBD
    * Res: TBD


* Post: /appointment
    * Req: 
        * appointmentStatus: String (Pending, Approve, Declined, Completed)
        * startDate: Date
        * endDate: Date
        * title: String
        * clientId: Number
        * profId: Number
    * Res: EMPTY

### *PUT Routes*
* Put: /update-status/:appointmentId
    * Req: 
        * PARAMS - appointmentId: Number
        * BODY: (All the fields required)
            * status: String
            * startDate: Date
            * endDate: Date
            * title: String
    * Res: EMPTY

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
            * regions: [region]
    * Res: EMPTY
