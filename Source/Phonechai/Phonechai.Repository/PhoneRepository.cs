﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Phonechai.Model;
using Phonechai.ViewModel;
using System.Data.Entity;

namespace Phonechai.Repository
{
   
    public class PhoneRepository: BaseRepository
    {
        public PhoneRepository(BusinessDbContext db) : base(db)
        {

        }

        public IQueryable<Phone> GetAll()
        {
            return Db.Phones.AsQueryable();
        }
        public PhoneViewModel GetDetail(string id)
        {
            Phone phone = Db.Phones.Find(id);
            PhoneViewModel viewModel = new PhoneViewModel(phone);
            return viewModel;
        }

        public string Add(Phone phone)
        {
            Phone added = Db.Phones.Add(phone);
            Db.SaveChanges();
            return added.Id;
        }

        public string Update(Phone phone)
        {
            Db.Entry(phone).State = EntityState.Modified;
            Db.SaveChanges();
            return phone.Id;
        }
        public bool Exists(string id)
        {
            return Db.Phones.Any(x => x.Id == id);
        }
        
    }
}
