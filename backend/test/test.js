import { expect } from "chai"
import superagent from "superagent"


const testRoute = (describeOne, route) =>{
    describe(describeOne, () =>{
        it("Ok", (done) =>{
            superagent
             .get(route)
             .end((error, response) => {
                expect(response.status).to.equal(200)
                done()
             })
         })
     })
}
const testMethod = (describeOne, route, method,) =>{
    describe("Return status", () =>{
        it("OK", () =>{
             superagent
             .get(route)
             .end((error, response) => {
                expect(response.request.method).to.equal(method.toUpperCase())
             })
         })
     })
     
}
let testOne = testRoute("Return status", "http://localhost:5000/")
let testTwo = testRoute("Return status", "http://localhost:5000/api/products")
let testThree = testMethod("Return status", "http://localhost:5000/api/products", "get")
let testFour = testMethod("Return status", "http://localhost:5000/", "get")





