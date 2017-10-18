import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Messages} from "../../models/message";
import {Threadz} from "../../models/threadz";
import {HttpClient} from "@angular/common/http";
import {MatRipple} from "@angular/material";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
    selector: 'app-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

    @Input() selectedThread: Threadz;

    @Input() messageList: Messages[];

    @ViewChild(MatRipple) ripple: MatRipple;

    form: FormGroup;


    constructor(private http: HttpClient, private fb: FormBuilder) {
    }

    ngOnInit() {


        this.form = this.fb.group({
            msg: '',
        });


    }


    sendMessage(b) {

        console.log(this.form.get('msg').value);

    }


}
