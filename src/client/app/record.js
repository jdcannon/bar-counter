class Record {
    static getStartPoint(d, i){
        let s = d.getMinutes() % i;
        return new Date(d.getTime() - s*Record.MSMFACTOR);
    }
    static getEndPoint(d, i){
        let e = d.getMinutes() % i;
        return new Date(d.getTime() + e*Record.MSMFACTOR);
    }
    static getSteps(ps, i){
        let f = d3.scaleQuantize();
        let start = Record.getStartPoint(ps[0].date, i);
        start.setSeconds(0);
        let end = Record.getEndPoint(ps[ps.length-1].date, i);
        end.setSeconds(0);
        f.domain([start.getTime(), end.getTime()]);
        let d = [];
        let rcount = (end.getTime() - start.getTime())/(i*Record.MSMFACTOR);
        for(let t = 0; t < rcount; t++){
            d.push(start.getTime() + t*Record.MSMFACTOR);
        }
        f.range(d);
        let rs = ps.map((e)=>{
            let fe = f(e.date.getTime());
            return fe;
        });
        return rs;
    }
    static getStepPoint(d, i){
        return new Date(d.getTime() + i*Record.MSMFACTOR);
    }
    static stepPointP(d, l, i){
        return d.getTime() - l.getTime() > i*Record.MSMFACTOR;
    }

}
Record.MSMFACTOR = 60000;
export default Record;
