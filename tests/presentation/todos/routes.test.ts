import request from 'supertest';
import { testServer } from '../../test-server';
import { prisma } from '../../../src/data/postgres';

describe('Todo route Testing', () => { 

    test('',()=>{

    })

    beforeAll(async()=>{
        await testServer.start();
    })

    afterAll(()=>{
        testServer.close();
    })

    beforeEach(async ()=>{
        await prisma.todo.deleteMany();
    });

    const texto1 = {text: 'Hola mundo 1'};

    test('should return TODOs api/todos ',async()=>{

        const response = await request(testServer.app)
        .get('/api/todos')
        

        console.log(response.body);

    })



    test('should return a TODO api/todo/:id',async()=>{

        const todo = await prisma.todo.create({data: texto1});

        const {body} = await request(testServer.app)
        .get(`/api/todos/${todo.id}`)
        .expect(200)


        expect( body ).toEqual({
            id: todo.id,
            text: todo.text,
            completedAt: todo.completedAt,
        });
    })


 })