import markerReducers from '../../src/reducers/markerReducers'
import * as type from '../../src/actions/types'


describe('markerReducers', () => {
    it('should return the initial state', () => {
        expect(markerReducers([], {})).toEqual([])
    })

    it('should handle ADD_MARKER', () => {
        const payload = 'marker'
        const expectedAction = {
            type: type.ADD_MARKER,
            payload
        }
        expect(markerReducers([], expectedAction)).toEqual([payload])
    })

    it('should handle DELETE_MARKER', () => {
        const payload = 'marker'
        const expectedAction = {
            type: type.DELETE_MARKER,
            payload
        }
        expect(markerReducers([], expectedAction)).toEqual([])
    })
    it('should handle CLEAR_MARKERS', () => {

        const expectedAction = {
            type: type.CLEAR_MARKERS
        }
        expect(markerReducers([], expectedAction)).toEqual([])
    })
})
