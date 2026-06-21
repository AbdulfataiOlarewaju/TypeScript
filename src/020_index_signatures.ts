


type NumberDict = {[k: string]:number}

const couters : NumberDict = {}

couters['Like'] = 1
couters['Comments'] = 3
couters['Shares'] = 5



// alternative way

type Metrics = Record<'Like' | 'views' | 'comments' | 'shares', number> // tight and safer

const metrics:Metrics = {
    Like: 1,
    views: 4,
    comments: 6,
    shares : 50
}


const priceMap = new Map<string, number>()

priceMap.set('likes', 1)

type LooseMap = Record<string,number | undefined>
const lm: LooseMap= {}
lm['like'] = 1
lm['view'] = undefined