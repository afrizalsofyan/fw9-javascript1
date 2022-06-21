const paca = ["isna", "rohmatul", "afiyah"]
const pacar = ["isna2", "rohmatul2", "afiyah2"]

const pars = [...paca, ...pacar]

const a = {
    a: "a",
    b: "c"
}
const b = {
    a: "aa",
    b: "cc",
    c: "ccc"
}

const rs = {...a, ...b}
console.log(rs)

// destruct
const [aa]=paca
const [bb]=rs
