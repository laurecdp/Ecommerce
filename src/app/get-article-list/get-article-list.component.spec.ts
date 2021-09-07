import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetArticleListComponent } from './get-article-list.component';

describe('GetArticleListComponent', () => {
  let component: GetArticleListComponent;
  let fixture: ComponentFixture<GetArticleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetArticleListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetArticleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
