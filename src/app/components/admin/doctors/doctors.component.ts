import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { CoreService } from 'app/_core/service/core/core.service';
import { AdminService } from 'app/_services/admin/admin.service';

@Component({
  selector: 'ms-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent implements OnInit {

  
  @ViewChild(MatPaginator) paginator : MatPaginator;
  popUpNewUserResponse               : any;
  popUpEditUserResponse              : any;
  popUpDeleteUserResponse            : any;
  hideId: boolean = true; //use to hide _id field in form

  color = {
     "Platinum" : "primary",
     "Gold"     : "accent",
     "Silver"   : "warn"
  }

 usermanagelist : any [] = [
     {
     img:"assets/img/user-3.jpg",
        firstName : "Bradley",
        lastName : "Bannon",
     emailAddress: "BradleyDBannon@teleworm.us",
     status: "Inactive",
        statusTime:"Since 5 min",
     accountType: "Platinum",
        accountTypeColor:"primary",
     dateCreated: "22 Aug 2018"
     }
  ];

  displayedColumns: string[] = [ 'phonenumber', 'email', 'role', 'createdAt', 'action'];
  //displayedColumns : string [] = ['select','user','emailAddress','status','accountType','dateCreated','action'];
  dataSource = new MatTableDataSource;
  selection = new SelectionModel<any>(true, []);

  constructor ( private coreService : CoreService, private adminService: AdminService
                //private pageTitleService : PageTitleService 
                ) { }

  ngOnInit () { 
    // this.pageTitleService.setTitle("User Management")
     this.dataSource.paginator = this.paginator;
      //retrieve all patients collection array
      // this.adminService.getPatientAdminDoctor().subscribe(data => {
      //    this.dataSource.data = data.response.doctors;
      // });

      //retrieve all doctors and populate them in table
      this.adminService.getAllDoctors().subscribe(data => {
         this.dataSource.data = data.response;
       //  console.log('this is getAllDocters.....' + data.response);
         
      })

  }


/***************************** */
/*********************
 *  Doctor dialog popup
 * ************** */
addNewDoctorDialog() {
   this.coreService.addNewDoctorDailog().
      subscribe( res => {this.popUpNewUserResponse = res},
                 err => console.log(err),
               //  ()  => this.getAddUserPopupResponse(this.popUpNewUserResponse)
                 )
 }




 deleteDoctorDialog(i) {
   this.coreService.deleteDoctorDialog("Are you sure you want to delete this user permanently?").
   subscribe( res => {this.popUpDeleteUserResponse = res},
              err => console.log(err),
             // ()  => this.getDeleteResponse(this.popUpDeleteUserResponse,i)
              
              )
 }

 editDoctorDialog(data, index){
   this.coreService.editDoctorDialog(data).
      subscribe( res => {this.popUpEditUserResponse = res},
                 err => console.log(err),
                 //()  => this.getEditResponse(this.popUpEditUserResponse, data, index)
                 )
}

 
























  /************************************************ */

  /** 
    * Whether the number of selected elements matches the total number of rows. 
    */
  isAllSelected() {
     const numSelected = this.selection.selected.length;
     const numRows = this.dataSource.data.length;
     return numSelected === numRows;
  }

  /**
    * Selects all rows if they are not all selected; otherwise clear selection. 
    */  
  masterToggle() {
     this.isAllSelected() ?
     this.selection.clear() :
     this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** 
    * addNewUserDialog method is used to open a add new user dialog.
    */   
  addNewUserDialog() {
     this.coreService.addNewUserDailog().
        subscribe( res => {this.popUpNewUserResponse = res},
                   err => console.log(err),
                   ()  => this.getAddUserPopupResponse(this.popUpNewUserResponse))
  }

  /**
    *getAddUserPopupResponse method is used to get a new user dialog response.
    *if response will be get then add new user into user list.
    */
  getAddUserPopupResponse(response: any){
     if(response){
        console.log(response)
        let addUser = {
           img : "assets/img/user-4.jpg",
           firstName : response.firstName,
           lastName : response.lastName,
           emailAddress : response.emailAddress,
           accountType : response.accountType,
           status : "Active",
           statusTime:"Since 1 hour",
           dateCreated : new Date(),
           accountTypeColor : this.color[response.accountType]
        }
        this.usermanagelist.push(addUser);     
     }
  }

  /** 
    *onDelete method is used to open a delete dialog.
    */
  onDelete(i){
     this.coreService.deleteDialog("Are you sure you want to delete this user permanently?").
        subscribe( res => {this.popUpDeleteUserResponse = res},
                   err => console.log(err),
                   ()  => this.getDeleteResponse(this.popUpDeleteUserResponse,i))
  }

  /**
    * getDeleteResponse method is used to delete a user from the user list.
    */
  getDeleteResponse(response : string,i){
     if(response == "yes"){
        this.dataSource.data.splice(i,1);
        this.dataSource = new MatTableDataSource(this.dataSource.data);
     }
  }

  /**
    * onEdit method is used to open a edit dialog.
    */
  onEdit(data, index){
     this.coreService.editList(data).
        subscribe( res => {this.popUpEditUserResponse = res},
                   err => console.log(err),
                   ()  => this.getEditResponse(this.popUpEditUserResponse, data, index))
  }

  /**
    * getEditResponse method is used to edit a user data. 
    */
  getEditResponse(response : any , data, i){
     if(response) {
        this.usermanagelist[i].firstName = response.firstName,  
        this.usermanagelist[i].lastName = response.lastName,
        this.usermanagelist[i].emailAddress = response.emailAddress,
        this.usermanagelist[i].accountType = response.accountType,
        this.usermanagelist[i].accountTypeColor = this.color[response.accountType]

     }
  }

}
