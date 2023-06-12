start = Lquery

Lquery = ( AnyLabel / Label )|1..,'.'|

Label = val:"!"?val3:LabelItem|1..,"|"|{return  { type: 'LABEL_GROUP', inverse:Boolean(val),items:val3  }}
LabelItem = textVal:Text|1|modVal:[@*%]*{const mods = modVal??[]; return  {
    type: 'LABEL', content:textVal[0],
    isCaseSensitive:mods.includes('@'),
    isPrefix: mods.includes('*'),
    isSearchByWords:mods.includes('%')
    }
}

AnyLabel=AnyLabelNBetween/AnyLabelNGE/AnyLabelNLE/AnyLabelN/AnyLabelUnlimited
AnyLabelUnlimited = "*"{return { type: 'ANY_LABEL', subtype:'UNLIMITED'   }}
AnyLabelN ="*{"val:Number "}"{return { type: 'ANY_LABEL', subtype:'LIMITED',limits:{min:val,max:val}   }}
AnyLabelNGE ="*{"val:Number ",}"{return { type: 'ANY_LABEL', subtype:'LIMITED',limits:{min:val,max:null}   }}
AnyLabelNLE ="*{,"val:Number "}"{return { type: 'ANY_LABEL', subtype:'LIMITED',limits:{min:null,max:val}   }}
AnyLabelNBetween ="*{"min:Number","max:Number "}"{return { type: 'ANY_LABEL', subtype:'LIMITED',limits:{min:min,max:max}   }}



Number = val:[0-9]+{return Number.parseInt(val.join(''))}
Text = val:[a-zA-Z0-9]+{return val.join('')}