Number.prototype.twoDigits = function() {
    return (this < 10 ? '0' : '') + this
}

Array.prototype._flatMap = function(fn) {
    const mappedList = this.map(fn)
    return mappedList.reduce((acc, e) => {
        if(!acc || !e) return acc || e
        return acc.concat(e)
    })
}

Array.prototype.distinct = function() {
    return this.filter((value, index, self) => self.indexOf(value) === index)
}