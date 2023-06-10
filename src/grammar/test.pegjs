start
  =  lxquery

lxquery = (anyLabel/label)|1..,'|'|

label= val:"!"?val3:labelItem{return  { type: 'LABEL_GROUP', inverse:Boolean(val),items:val3  }}
labelItem =textVal:text|1|modVal:[@*%]*{const mods = modVal??[]; return  {
    type: 'LABEL', content:textVal[0],
    isCaseSensitive:mods.includes('@'),
    isPrefix: mods.includes('*'),
    isSearchByWords:mods.includes('%')
    }
}


anyLabel=anyLabelNBetween/anyLabelNGE/anyLabelNLE/ anyLabelN/anyLabelUnlimited
anyLabelUnlimited = "*"{return { type: 'ANY_LABEL', subtype:'UNLIMITED'   }}
anyLabelN ="*{"val:number "}"{return { type: 'ANY_LABEL', subtype:'LIMITED',limits:{min:val,max:val}   }}
anyLabelNGE ="*{"val:number ",}"{return { type: 'ANY_LABEL', subtype:'LIMITED',limits:{min:val,max:null}   }}
anyLabelNLE ="*{,"val:number "}"{return { type: 'ANY_LABEL', subtype:'LIMITED',limits:{min:null,max:val}   }}
anyLabelNBetween ="*{"min:number","max:number "}"{return { type: 'ANY_LABEL', subtype:'LIMITED',limits:{min:min,max:max}   }}



number = val:[0-9]+{return Number.parseInt(val[0])}
text = val:[a-zA-Z0-9]+{return val[0]}