//import createClient from '@supabase/supabase-js';
import { createClient } from '@supabase/supabase-js'

const _supabase = createClient("https://lhwiezkghcmhqtyyjxlw.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxod2llemtnaGNtaHF0eXlqeGx3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA4MzQ5MjgsImV4cCI6MjAxNjQxMDkyOH0.Ju89Ks2ab2B5J1ID2LDop8a-dH2rZ4WY-XT9qCSpHE8")

let subForm = document.getElementById('subForm')
let email = document.getElementById('emailInput');

async function submitSubscription(email) {
    const { error } = await _supabase.from('subscribers').insert({ email })

    console.log('Error: ', error)
}



subForm.addEventListener('submit', event => {
    event.preventDefault()
    if (email.value === "") {
        alert('Please, enter email address before submitting!');
        return;
    }
    try {
        submitSubscription(email.value).then(() => {
            console.log("Subscribed..", email.value);
            email.value = "";
        }).catch(e => console.log('Error: ', e))
        // email = "";
    } catch (error) {
        alert('Could not submit your request. That\'s all I know.')
    }

})
