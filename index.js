
 $(".specificinfo").hide();

// REPRESENTS THE ONE NODE IN THE LIST 
class node {
    constructor(data, ptr, previous, next) {
        this.data = data;
        this.ptr = ptr;
        this.previous = previous;
        this.next = next;
    }
}

// LINKED LIST CLASS 
class list {


    // CONSTRUCTOR 
    constructor() {
        this.head = null;
        this.next = 1000;
        return this.head;
    }

    // INSERT AT END 
    insert(data) {
        if (this.head == null) {
            this.head = new node(data, null, null, 1000);
            return;
        }

        let tem = this.head;

        while (tem.ptr != null) {
            tem = tem.ptr;
        }
        tem.ptr = new node(data, null, tem.next, tem.next + 1000);

    }

    insertAtBegin(data) {
        if (this.head == null) {
            this.head = new node(data, null, null, Math.floor(Math.random() * 1000));
            return;
        }

        let tem = this.head;
        let rand = Math.floor(Math.random() * 1000)
        tem.previous = rand;
        let newNode = new node(data, tem, null, tem.previous);
        this.head = newNode;
        console.log("New Node Vaules ", newNode);
        // LinkedList=this.head;

    }

    // Find Mid value of list  
    findmid() {
        if ( this.head == null) return;
        let tem = this.head;
        let low =tem ;
        let fast = tem;
        while (fast.ptr!=null  ) {
            low = tem.ptr;
            if(fast.ptr.ptr==null) break;
            fast = tem.ptr.ptr;
        }

        return low.data;
    }

    // TRAVERSE THE LINKED LIST 
    traverse() {
        if (this.head == null) {
            console.log(" No elements are present.")
            return
        }
        while (this.head != null) {
            this.head = this.head.ptr;
        }
    }

}

// REPRESENTS THE WHOLE LINKED LIST 
let LinkedList = new list();


// PRINT THE LINKED LIST AT CURRUENT SNAP OF LIST   
function printGUI() {
    // console.log(" Linked list from GUI ", LinkedList);
    if (LinkedList == null) {
        console.log(" No elements are present.")
        return
    }

    let list_div = document.getElementById("list_main_container");
    list_div.innerHTML = "";

    var tem = LinkedList.head;

    while (tem != null) {
        if (tem.ptr == null) {
            list_div.innerHTML += `  <div class="one_node1">
                 <div class="one_node">
                    <div class="data"><b>${tem.data}</b></div>
                    <div class="address"><b>null</b></div>
                     </div>
                  <div><h6 class="nodeaddr" >${tem.previous}</h6></div>
                </div>
        ` ;
            tem = tem.ptr;
            continue;
        }

        list_div.innerHTML += `  <div class="one_node1">
        <div class="one_node">
            <div class="data"><b>${tem.data}</b></div>
            <div class="address"><b>${tem.next}</b></div>
        </div>
        <div><h6 class="nodeaddr" >${tem.previous}</h6></div>
    </div>
    <img src="./icons/one.png"  class="arrow_img " alt="not found "/>
    `;

        tem = tem.ptr;

    }

}



// INSERT VALUE TO THE LINKED LIST 
function addNode(e) {
    let value = $("#append_last").val();
    $("#append_last").val("");
    LinkedList.insert(value);
    $("#add_close_btn").trigger("click");
    printGUI();

}

// INSERT NODE AT THE BEGINING OF THE LIST 
function insertAtBegin(e) {
    let value = $("#append_last").val();
    $("#append_last").val("");
    LinkedList.insertAtBegin(value);
    $("#add_close_btn").trigger("click");
    printGUI();

}

function test(){
    // $("#topmostrow").animate({width:'220px',height:'200px'},1000);
    // setTimeout(()=>{
    //     $("#topmostrow").animate({height:'100px',width:'100%'},1000);
    // },3000);
    $(".specificinfo").fadeIn(1000);
    $(".specificinfo").animate({right:'100px'},1000)
    $(".specificinfo").animate({height:'100px',width:'200px'},2000)
    setTimeout(() => {
        $(".specificinfo").hide(1000);

    }, 8000);

}

function buttonClicked(e) {
    let value = e.value;
    if (value == 'end') {
        $("#begin").hide();
        $("#end").show();

    } else if (value == 'begin') {
        $("#end").hide();
        $("#begin").show();

    } else if (value == "findmid") {
        let mid = LinkedList.findmid();
        console.log(mid);
    }else if ( value =='t'){
       test()
    }
}
