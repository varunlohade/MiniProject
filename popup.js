document.querySelector('.openModal').addEventListener('click', function(){
    chrome.tabs.query({currentWindow: true, active:true}, function(tabs){
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {command: "openModal"})
    })
})

chrome.runtime.onMessage.addListener((msg, sender, response) =>{
    console.log('validating modal', msg);
    if(msg.command == "openModal"){
        document.querySelector('._popup_button').click();
    }
    return true;
});