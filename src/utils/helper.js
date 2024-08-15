export function formatDate(date){
    return new Intl.DateTimeFormat("en",{
        day : "numeric",
        month : "short",
        hour: "2-digit",
        minute : "2-digit"
    }).format(date);
}


export function filterItems(items,key,value){
    return items.filter(item => item[key] === value)
}