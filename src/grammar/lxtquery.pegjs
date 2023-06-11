start = lxtquery

lxtquery = and/or/brackets/not/labelItem

and = val1:labelItem'&'val2:labelItem{return {type:"AND",items:[val1,val2]}}
or = val1:labelItem'|'val2:labelItem{return {type:"OR",items:[val1,val2]}}

brackets = '('val:(not/and/or/labelItem)')'{return {type:"BRACKETS",item:val}}

not = "!"val:lxtquery{return {type:"NOT",item:val}}

labelItem = textVal:text|1|modVal:[@*%]*{const mods = modVal??[]; return  {
    type: 'LABEL', content:textVal[0],
    isCaseSensitive:mods.includes('@'),
    isPrefix: mods.includes('*'),
    isSearchByWords:mods.includes('%')
    }
}

number = val:[0-9]+{return Number.parseInt(val.join(''))}
text = val:[a-zA-Z0-9]+{return val.join('')}