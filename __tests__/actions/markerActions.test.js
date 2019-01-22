import * as markerActions from '../../src/actions/markerActions'
import * as type from '../../src/actions/types'


describe('markerActions', () => {
    it('should create an action to add marker', () => {
        const payload = ['marker']

        const expectedAction = {
            type: type.ADD_MARKER,
            payload
        }

        expect(markerActions.addMarker(payload)).toEqual(expectedAction)
    })
    it('should create an action to delete marker', () => {
        const payload = ['marker']

        const expectedAction = {
            type: type.ADD_MARKER,
            payload
        }
        expect(markerActions.addMarker(payload)).toEqual(expectedAction)
    })
})
