Start
  = Expression

Expression
  =
  And /
  Or /
  Primary

Primary
  =  Not
  / Brackets
  / LabelItem


Brackets = "("expr:Expression")"{ return {type:"BRACKETS",items:expr}}
And =  left:Primary"&"right:Expression{ return {type:"AND",items:[left,right]}}
Or = left:Primary"|"right:Expression{ return {type:"OR",items:[left,right]}}
Not = "!"val:Primary{return {type:"NOT", item:val}}
LabelItem = textVal:Text|1|modVal:[@*%]*{const mods = modVal??[]; return  {
    type: 'LABEL', content:textVal[0],
    isCaseSensitive:mods.includes('@'),
    isPrefix: mods.includes('*'),
    isSearchByWords:mods.includes('%')
    }
}

Text = val:[a-zA-Z0-9_]+{return val.join('')}