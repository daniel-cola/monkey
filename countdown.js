let countdowns = {}
class CountdownInfo {
    constructor(name, interval) {
        this.name = name
        this.time = new Date().getTime()
        this.interval = interval
    }

    setTime = (time) => this.time = time

    reset =()=> this.time = new Date().getTime()

    toString =()=> this.name + ":" + parseInt((this. time + this.interval - new Date().getTime())/100)
}
    
let createCountdown = (name, interval) => {
    let cd = countdowns.get(name)
    if(cd == null){
        cd = new CountdownInfo(name, interval)
        countdowns[name] = cd
    }

    cd.reset()
}

let getCountdownsString = ()=>{
    let str =''
    for(let k in countdowns){
      let cd = countdowns[k]
      str += cd.toString() +  ";"
    }
    return str
}
