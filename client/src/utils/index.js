//   Utility function or file where you can create different functions that can be reusable throughout the application
import { surpriseMePrompts } from '../constants';
import FileSaver from 'file-saver';






export function getRandomPrompt(prompt) {
    // We need to get a random index
    const randomIndex = Math.floor(Math.random() *
    surpriseMePrompts.length);

    const randomPrompt = surpriseMePrompts[randomIndex]; 

    // To imlement a check so that we do not get the sam random
    // prompt 2 or 3 times in a row.

    if(randomPrompt===prompt){
        return getRandomPrompt(prompt)
    }

    return randomPrompt;
}


// Second util function
export async function downloadImage(_id, photo) {
FileSaver.saveAs(photo, `download-${_id}.jpg` );
}