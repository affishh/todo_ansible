const todoController = require("../../controllers/todo_controller")

jest.mock ("../../models/todomodel.js")

const mockSave = jest.fn();
const mockFind = jest.fn();

const Todo = require("../../models/todomodel.js");
const { param } = require("../../routes/todoRoutes.js");

Todo.find = mockFind


describe("when the controller is invoked", () =>{
    let req, res;

    beforeEach(() =>{
        req = {
            body : {},
            params: {}
        };
        res = {
            json :jest.fn(() => res ),
            status:jest.fn(() => res)
        }

    })




    describe("For getTodo function", () =>{
        it("Should return all the todos", async() => {
            const mockTodos = [{ __id : 0, title: "Todo1", completed: false }, { __id : 1, title:"Todo2", completed: false }, { __id : 2, title:"Todo3", completed: false }];
            mockFind.mockResolvedValue(mockTodos)
            await todoController.getTodos(req, res);

            expect(mockFind).toHaveBeenCalled()
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith(mockTodos)


            expect(true).toBe(true)
        })
        expect(true).toBe(true)
    })

}

)