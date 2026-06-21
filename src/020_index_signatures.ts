


type NumberDict = {[k: string]:number}

const couters : NumberDict = {}

couters['Like'] = 1
couters['Comments'] = 3
couters['Shares'] = 5



// alternative way

type Metrics = Record<'Like' | 'views' | 'comments' | 'shares', number> // tight and safer. used when we have finite number of keys

const metrics:Metrics = {
    Like: 1,
    views: 4,
    comments: 6,
    shares : 50
}

// when you have something called dynamic keys at run time, so in that case you use  map instead of record
const priceMap = new Map<string, number>()

priceMap.set('likes', 1)

type LooseMap = Record<string,number | undefined>
const lm: LooseMap= {}
lm['like'] = 1
lm['view'] = undefined