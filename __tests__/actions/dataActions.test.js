import * as dataActions from '../../src/actions/dataActions'
import * as type from '../../src/actions/types'


describe('dataActions', () => {
    it('should create an action to add data', () => {
        const payload = {
            lng:65.666,
            lat:52.666,
            name:'Test name',
            icon:'testicon'
        }
        const expectedAction = {
            type:type.ADD_DATA,
            payload
        }

       expect(dataActions.addData(payload)).toEqual(expectedAction)
    })
})
