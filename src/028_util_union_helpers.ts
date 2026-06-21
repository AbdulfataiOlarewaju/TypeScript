

// Exclude<U, V> -> remove from U those members that are assignable to V
// Extract<U, V> -> keep from U those members that are assignable to V
// Nonnulllable


type EventType1 = 'click' | 'submit' | 'hover' | 'hover' | 'keydown' | 'keyup'
type EventType2 = Exclude<EventType1, 'keydown'>



function handleEvent1(e:EventType2){
    console.log(e);
    
}
handleEvent1('click') // no error
// handleEvent1('keydown') // error because keydown is no longer available in EventType2



type ActionN1 = 'create' | 'update' | 'delete' | 'read'
type  ActionN2 = Extract<ActionN1, 'create' | 'update' | 'delete'> 


function handleEvent2(e:ActionN2){
    console.log(e);
    
}

// handleEvent2('create')

type MayBeNumber = number | null | undefined;
type CleanNumber = NonNullable<MayBeNumber>; //keep only number

function sqaure(num : CleanNumber){
    return num * 2
}


sqaure(10)
// sqaure(null) //error