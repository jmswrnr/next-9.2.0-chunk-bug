import moment from 'moment'

export default function TestComponent() {
    return <div>TestComponent: {moment().format()}</div>
}