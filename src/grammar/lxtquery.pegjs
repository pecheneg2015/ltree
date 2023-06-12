start = lxtquery

lxtquery = expressions


and = val1:labelItem'&'val2:expressions{return {type:"AND",items:[val1,val2]}}
or = val1:labelItem'|'val2:expressions{return {type:"OR",items:[val1,val2]}}

brackets = '('val:vars')'{return {type:"BRACKETS",item:val}}

not = "!"val:vars{return {type:"NOT",item:val}}

labelItem = textVal:text|1|modVal:[@*%]*{const mods = modVal??[]; return  {
    type: 'LABEL', content:textVal[0],
    isCaseSensitive:mods.includes('@'),
    isPrefix: mods.includes('*'),
    isSearchByWords:mods.includes('%')
    }
}

vars = and/or/brackets/not/labelItem
expressions = and/or/brackets/not/labelItem

number = val:[0-9]+{return Number.parseInt(val.join(''))}
text = val:[a-zA-Z0-9]+{return val.join('')}