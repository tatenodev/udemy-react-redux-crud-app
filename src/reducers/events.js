import _ from 'lodash'
import { READ_EVENTS, DELETE_EVENTS, } from '../actions'

export default (events = {}, action) => {
    switch (action.type) {
        case READ_EVENTS:
            // action.response.dataは下記のようになっている
            //[
            // {id: 1, title: "Let's have an event 1!", body: "This is the body for event 1."},
            // {id: 2, title: "Let's have an event 2!", body: "This is the body for event 2."},...
            // ]
            // 望ましいデータの形に変換する
            // {
            //     1: {id: 1, title: "Let's have an event 1!", body: "This is the body for event 1."},
            //     2: {id: 2, title: "Let's have an event 2!", body: "This is the body for event 2."}
            // }
            // console.log(action.response.data)
            // console.log(_.mapKeys(action.response.data, 'id'))
            return _.mapKeys(action.response.data, 'id')
        case DELETE_EVENTS:
            delete events[action.id]
            return { ...events }
        default:
            return events
    }
}
