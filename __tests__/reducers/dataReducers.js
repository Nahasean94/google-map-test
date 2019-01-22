import dataReducers from '../../src/reducers/dataReducers'
import * as type from '../../src/actions/types'


describe('dataReducers', () => {
    it('should return the initial state', () => {
        expect(dataReducers([],{})).toEqual([])
    })
    it('should handle ADD_DATA',()=>{
        const payload = [{
            lng:65.666,
            lat:52.666,
            name:'Test name',
            icon:'testicon'
        }]
        const expectedAction = {
            type:type.ADD_DATA,
            payload
        }
        expect(dataReducers([],expectedAction)).toEqual(payload)
    })
})
