const ApplicationController = require('./ApplicationController');

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
})

describe("ApplicationController", ()=>{
    describe("#handleNotFound",()=>{
        it("should call res.status(200) and res.json with status and message", ()=>{

            const mockRequest ={};

            const mockResponse = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn().mockReturnThis(),
              };        

            const applicationController = new ApplicationController({})
            applicationController.handleNotFound(mockRequest, mockResponse);
            expect(mockResponse.status).toHaveBeenCalledWith(200);
            expect(mockResponse.json).toHaveBeenCalledWith({
                status: "OK",
                message: "BCR API is up and running!",
            });
        })
    })
})

describe("ApplicationController", ()=>{
    describe("#handleError",()=>{
        it("should call res.status(200) and res.json with status and message", ()=>{

            const mockRequest ={};

            const mockResponse = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn().mockReturnThis(),
              };        

            const applicationController = new ApplicationController({})
            applicationController.handleError(mockRequest, mockResponse);
            expect(mockResponse.status).toHaveBeenCalledWith(200);
            expect(mockResponse.json).toHaveBeenCalledWith({
                status: "OK",
                message: "BCR API is up and running!",
            });
        })
    })
})