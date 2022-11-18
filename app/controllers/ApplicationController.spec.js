const ApplicationController = require('./ApplicationController');
const {NotFoundError} = require("../errors")


describe("ApplicationController", ()=>{
    describe("#handleGetRoot",()=>{
        it("should call res.status(200) and res.json with status and message", ()=>{

            const mockRequest ={};

            const mockResponse = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn().mockReturnThis(),
              };        

            const applicationController = new ApplicationController({})
            applicationController.handleGetRoot(mockRequest, mockResponse);
            expect(mockResponse.status).toHaveBeenCalledWith(200);
            expect(mockResponse.json).toHaveBeenCalledWith({
                status: "OK",
                message: "BCR API is up and running!",
            });
        })
    })

    describe("#handleNotFound",()=>{
        it("should call res.status(404) and res.json with error not found", ()=>{
            const mockRequest ={
                method: 'get',
                url: 'abcde.co.id'
            };
            const err = new NotFoundError(mockRequest.method, mockRequest.url);

        const mockResponse = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn().mockReturnThis(),
        };        

            const applicationController = new ApplicationController({})
            applicationController.handleNotFound(mockRequest, mockResponse);
            expect(mockResponse.status).toHaveBeenCalledWith(404);
            expect(mockResponse.json).toHaveBeenCalledWith({
                error: {
                  name: err.name,
                  message: err.message,
                  details: err.details,
                }
            });
        })
    })

    describe("#handleError",()=>{
        it("should call res.status(500) and res.json with error", ()=>{
           
            const mockRequest ={
                method: 'get',
                url: 'abcde.co.id'
            };
            const err = new NotFoundError(mockRequest.method, mockRequest.url);
            

            const mockResponse = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn().mockReturnThis(),
            };        
            const mockNext = {}

                const applicationController = new ApplicationController({})
                applicationController.handleError(err, mockRequest, mockResponse, mockNext);
               
                expect(mockResponse.status).toHaveBeenCalledWith(500);
                expect(mockResponse.json).toHaveBeenCalledWith({
                    error: {
                    name: err.name,
                    message: err.message,
                    details: err.details,
                    }
                });
            })
    })
    describe("#getOffsetFromRequest",()=>{
        it("should return the offset from request", ()=>{
           
            const mockRequest ={
                query:{
                    page : 2,
                    pageSize : 10,
                }
            };
            

                const applicationController = new ApplicationController()
                const offset = applicationController.getOffsetFromRequest(mockRequest);
                expect(offset).toEqual(10);
            })
    })
    describe("#buildPaginationObject", () => {
        it("should return the Pagination from request", () => {
          const mockRequest = {
            query: {
              page: 1,
              pageSize: 10,
            },
          };
          const count = 1;
    
          const controller = new ApplicationController();
          const result = controller.buildPaginationObject(mockRequest, count);
    
          expect(result).toEqual({
            page: 1,
            pageCount: 1,
            pageSize: 10,
            count: 1,
          });
        });
      });    
})






