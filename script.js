function show_modal() {
    gId("modal").style.display = "block";
    gId("modal").classList.add("openmodal");
}

function hide_modal() {
    gId("modal").classList.remove("openmodal");
    gId("modal").classList.add("hydmodal");
}

function addtocart(i) {
    let Rowid = i.id.split("_")[1];
    let Image = document.getElementById("imgdiv_" + Rowid).innerHTML;
    let Name = document.getElementById("name_" + Rowid).innerHTML;
    let Quantity = document.getElementById("quantity_" + Rowid).value;
    let quantparsed = parseInt(Quantity);
    let Amount = document.getElementById("amt_" + Rowid).innerHTML;
    let comrem = parseFloat(Amount.replaceAll(",", ""));
    let amountparsed = parseInt(comrem);
    let prod = document.getElementById(Rowid);
    let multiple = quantparsed * amountparsed;
    let prodexist = document.getElementById("table_body").contains(prod);
    var newprod = `<tr class="addedrow" id="${Rowid}">
    <td class="cart_img">${Image}</td>
    <td>${Name}</td>
    <td>${Quantity}</td>
    <td><sup>&#8377;</sup><span class="rowtotal" id="amount_${Rowid}">${multiple.toLocaleString()}</span></td>
    <td><i id="remove_${Rowid}" class="fa-solid fa-circle-minus text-danger cursor" onclick="delete_func(this)"></i></td>
    </tr>< class="text-light"hr>`;
    if (prodexist == true) {
        alert("This Product is already in your cart.");
    }
    else {
        if (Quantity === "choose") {
            alert("Please choose a quantity for the product.");
        }
        else {
            $('#table_body').prepend(newprod);
            getfinalamt(Rowid);
        }
    }
}

function getfinalamt() {
    console.log("starting the functiion");
    var x = document.getElementsByClassName("rowtotal");
    var finalprice = 0;
    for (i = 0; i < x.length ; i++) {
        var thiselement = x[i];
        var thisprice = thiselement.innerHTML.replace(",", "");
        console.log(thisprice);
        finalprice += parseInt(thisprice);
    }
    gId("total").innerHTML = finalprice.toLocaleString();
}

function delete_func(d) {
    let RowId = d.id.split("_")[1];
    let deld_row = document.getElementById(RowId);
    deld_row.parentNode.removeChild(deld_row);
}

function clearall() {
    gId("table_body").innerHTML = "";
}

function purchase() {
    const elem = document.querySelector("#table_body");
    if (elem.childNodes.length === 1) {
        alert("There is nothing in your cart.");
    } else {
        confirm("Hello, your purchase has been successfully completed and will be delivered to your address ASAP.")
        clearall();
        hide_modal();
        setTimeout(() => {
            gId("shop").style.display = "none";
            gId("end").style.display = "block";
        }, 2500);
    }
}

function gClass(c) {
    return document.getElementsByClassName(c);
}

function gId(i) {
    return document.getElementById(i);
}
