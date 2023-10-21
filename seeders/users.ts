const users= [ {
    "_id": "5f0f36345628b2bb08ddcf83",
    "firstName": "Marina",
    "lastName": "Orozco",
    "email": "marina@kahvanainc.com"
    },
    {
    "_id": "5f0f3634a3357afc09a0333d",
    "firstName": "Kip",
    "lastName": "Winters",
    "email": "kip@kahvanainc.com"
    },
    {
    "_id": "5f0f363455f1ad4632d8e4d3",
    "firstName": "Lorie",
    "lastName": "Avery",
    "email": "lorie@kahvanainc.com"
    },
    {
    "_id": "5f0f36343311956754254404",
    "firstName": "Jasmin",
    "lastName": "Winters",
    "email": "jasmin@kahvanainc.com"
    },
    {
    "_id": "5f0f36344285b38ab4e9187f",
    "firstName": "Emma",
    "lastName": "Hess",
    "email": "emma@kahvanainc.com"
    },
    {
    "_id": "5f0f3634abaa863ab18ac741",
    "firstName": "Elvia",
    "lastName": "Acosta",
    "email": "elvia@kahvanainc.com"
    },
    {
    "_id": "5f0f36342c501774010d92fa",
    "firstName": "Liliana",
    "lastName": "Sweeney",
    "email": "liliana@kahvanainc.com"
    },
    {
    "_id": "5f0f3634987f2ae9d3c7c48a",
    "firstName": "Florencio",
    "lastName": "Acosta",
    "email": "florencio@kahvanainc.com"
    },
    {
    "_id": "5f0f3634e8dfd9bbde33c703",
    "firstName": "Delores",
    "lastName": "Sanchez",
    "email": "delores@kahvanainc.com"
    }
    ];
    
    const phoneNumbers=[
    {
    "email":"marina@kahvanainc.com",
    "phoneNumber":"12345"
    },
    {
    "email":"delores@kahvanainc.com",
    "phoneNumber":"54123"
    },
    {
    "email":"florencio@kahvanainc.com",
    "phoneNumber":"45552"
    },
    {
    "email":"lorie@kahvanainc.com",
    "phoneNumber":"56895"
    },
    {
    "email":"elvia@kahvanainc.com",
    "phoneNumber":"45685"
    },
    {
    "email":"emma@kahvanainc.com",
    "phoneNumber":"85966"
    },
    {
    "email":"jasmin@kahvanainc.com",
    "phoneNumber":"1233"
    },
    {
    "email":"lorie@kahvanainc.com",
    "phoneNumber":"4456"
    },
    {
    "email":"kip@kahvanainc.com",
    "phoneNumber":"12558"
    },
    {
      "email":"liliana@kahvanainc.com",
      "phoneNumber":"124458"
      }
    ];
    
    
    export const userData = users.map((user) => {
      const phoneInfo = phoneNumbers.find((phone) => phone.email === user.email);
      if (phoneInfo) {
        return{
          "_id":user._id,
          "firstName": user.firstName,
          "lastName": user.lastName,
          "email": user.email,
          "phoneNumber": phoneInfo.phoneNumber
  
        }
      }
      return{
        "_id":user._id,
        "firstName": user.firstName,
        "lastName": user.lastName,
        "email": user.email,
        "phoneNumber": null
  
      }
    });