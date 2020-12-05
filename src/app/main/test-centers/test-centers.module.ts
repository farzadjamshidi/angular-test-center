import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TestCentersComponent } from './test-centers.component';
import { StepOneComponent } from './pages/step-one/step-one.component';
import { StepTwoComponent } from './pages/step-two/step-two.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

const routes: Routes = [
  {path : '' , component : TestCentersComponent, children : [
    {path : 'step-one' , component : StepOneComponent},
    {path : 'step-two' , component : StepTwoComponent},
    {path : '**' , redirectTo : 'step-one' },
  ]}
];

@NgModule({
  declarations: [ 
    TestCentersComponent,
    StepOneComponent,
    StepTwoComponent
  ],
  imports: [
    FlexLayoutModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  entryComponents : [TestCentersComponent]
})
export class TestCentersModule { }
