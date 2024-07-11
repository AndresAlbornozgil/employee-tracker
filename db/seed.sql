INSERT INTO department (name)
VALUES ('Information Technology'),
('Sales'),
('Human Resources'),
('Customer Service'),
('Finance'), ('Marketing'),
('Operations'),
('Adminstrative');

INSERT INTO role (title, salary, department_id)
VALUES ('IT Support', 55000, 1),
('Systems Admin', 90000, 2),
('Sales Rep', 50000, 3),
('Sales Manager', 11000, 4),
('Recruiter', 60000, 5),
('Trainer', 55000, 6),
('Customer Service Rep', 35000, 7),
('Customer Service Manager', 60000, 8),
('Accountant', 60000, 9),
('Auditor', 65000, 10),
('Marketing Research Analyst', 75000, 11),
('Social Media Manager', 60000, 12),
('Logistics Coordinator', 45000, 13),
('Operations Manager', 60000, 14),
('Administrative Assitant', 35000, 15),
('Administrative Supervisor', 55000, 16);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Liam', 'Hawthorne', 1, 1),
('Aria', 'Montgomery', 2, 2),
('Ethan', 'Blackwood', 3, 3),
('Luna', 'Whitfield', 4, 4),
('Noah', 'Kensington', 5, 5),
('Violet', 'Everly', 6, 6),
('Caleb', 'Ashford', 7, 7),
('Ruby', 'Sinclair', 8, 8),
('Owen', 'Thorne', 9, 9),
('Zara', 'Kingsley', 10, 10);
