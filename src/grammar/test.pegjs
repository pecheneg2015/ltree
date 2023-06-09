start
  =  lxquery

lxquery = (anyLabel/label)|1..20,'|'|

label= val:"?"?val2:[a-zA-Z0-9]+{return  { type: 'LABEL', inverse:Boolean(val),content:val2   }}

anyLabel=anyLabelNBetween/anyLabelNGE/anyLabelNLE/ anyLabelN/anyLabelUnlimited

anyLabelUnlimited = "*"{return { type: 'ANY_LABEL', subtype:'UNLIMITED'   }}
anyLabelN ="*{"val:number "}"{return { type: 'ANY_LABEL', subtype:'LIMITED',min:val,max:val   }}
anyLabelNGE ="*{"val:number ",}"{return { type: 'ANY_LABEL', subtype:'LIMITED',min:val,max:null   }}
anyLabelNLE ="*{,"val:number "}"{return { type: 'ANY_LABEL', subtype:'LIMITED',min:null,max:val   }}
anyLabelNBetween ="*{"min:number","max:number "}"{return { type: 'ANY_LABEL', subtype:'LIMITED',min:min,max:max   }}

number = val:[0-9]+{return Number.parseInt(val[0])}