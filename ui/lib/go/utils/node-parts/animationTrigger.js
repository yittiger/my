export default function($, go, options) {
    if(options instanceof Array) {
        const arr = []
        options.forEach(r => {
            arr.push(new go.AnimationTrigger(r))
        })

        return arr
    } else {
        return []
    }
}