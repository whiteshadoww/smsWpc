import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {MatDialog} from '@angular/material';
import {PreviewUserImageComponent} from '../preview-user-image/preview-user-image.component';
import {User} from '../../models/user';
import {BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from "@angular/common/http";
import {Threadz} from "../../models/threadz";
import {Messages} from "../../models/message";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {forEach} from "@angular/router/src/utils/collection";
import {assertNotNull} from "@angular/compiler/src/output/output_ast";
import {isUndefined} from "util";

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.css'],
    encapsulation: ViewEncapsulation.Emulated,
})
export class SidenavComponent implements OnInit {

    activeThread = new Threadz();
    isSearching = false;
    isHandset: Observable<BreakpointState>;
    threadList: Threadz[];
    searchThreadList: Threadz[];
    messageList: Messages[];
    @Input() pageLoading: boolean;
    dummy = new Array(5);
    isDummy = false;

    toolbarWidth = '100%';
    navWidth = '360px';

    ngOnInit(): void {


        this.isHandset = this.mqm.observe([Breakpoints.HandsetLandscape, Breakpoints.HandsetPortrait]);
        this.isHandset.subscribe(this.change);
        this.pageLoading = true;
        this.isDummy = true;
        this.http.get<Threadz[]>('/api/thread.xhtml').subscribe(data => {
            // Read the result field from the JSON response.
            console.log(data);
            this.threadList = data.reverse();
            this.pageLoading = false;
            this.isDummy = false;

        });


    }

    constructor(public dialog: MatDialog,
                private mqm: BreakpointObserver,
                private http: HttpClient,
                private fb: FormBuilder) {

    }


    onClick(thread) {
        this.activeThread = thread;
        this.loadMsg();
    }

    change(e) {
        if (e) {
            this.navWidth = '60px !important';
            this.toolbarWidth = '60px !important';

        } else {
            this.navWidth = '360px';
            this.toolbarWidth = '100%';

        }
        console.log(e);
    }


    previewUserImage(event, thread) {


        let dd = this.dialog.open(PreviewUserImageComponent, {
            data: {thread: thread},
            height: '420px',
            width: '450px',
        });

        dd.afterClosed().subscribe((result: number) => {

            console.log(result);

            if (result === 1) {


            } else if (result === 2) {
                this.activeThread = thread;
                this.loadMsg();
            } else {


            }

            dd = null;
        });

        event.stopPropagation();
        // return false;

    }

    searchFocused() {

        this.isSearching = !this.isSearching;

    }

    loadMsg() {

        this.messageList = [];
        this.pageLoading = true;
        this.http.get<Messages[]>('/api/threadMessages.xhtml?threadId=' + this.activeThread.threadId)
            .subscribe(data => {
                // Read the result field from the JSON response.
                this.pageLoading = false;
                if (this.messageList === data) {
                    return;
                }
                this.messageList = data;

            });
    }

    filterThread(d) {

        this.searchThreadList = this.threadList
            .filter(
                t =>
                    (isUndefined(t.name) ? false : t.name.toLocaleLowerCase().indexOf(d) > -1) ||
                    t.addr.toLocaleLowerCase().indexOf(d) > -1
            );

    }

}
