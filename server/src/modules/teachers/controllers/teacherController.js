import { teacherDao } from "../daos/teachersDaos.js";

class TeacherController {
  async getAll(req, res) {
    try {
      const teachers = await teacherDao.getAllTeachers();
      res
        .status(201)
        .json({ message: "success, sending all teachers", data: teachers });
    } catch (error) {
      console.log({ error: error.message });
    }
  }

  async getByid(req, res) {
    const { id } = req.params;
    try {
      const teacher = await teacherDao.getTeacherByid(id);
      if (!teacher) {
        res.status(403).json({ message: "teacher not found" });
      } else {
        res
          .status(201)
          .json({ message: "success, sending teacher", data: teacher });
      }
    } catch (error) {
      console.log({ error: error.message });
    }
  }

  async create(req, res) {
    const { name, lastname, dni } = req.body;
    try {
      await teacherDao.addTeacher({ name, lastname, dni });
      res.status(201).json({ success: "Teacher added succesfull" });
    } catch (error) {
      //send something
      console.log({ error: error.message });
    }
  }

  async update(req, res) {
    const { id } = req.params;
    const { name, lastname, dni } = req.body;
    try {
      //verfy if id send match with teachersDB
      const teacher = await teacherDao.getTeacherByid(id);

      if (!teacher) {
        res.status(403).json({ message: "teacher not found" });
      } else {
        await teacherDao.updateTeacher(id, {
          name,
          lastname,
          dni,
        });

        res
          .status(201)
          .json({ mesage: "success, Teacher updated", data: teacher });
      }
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  }

  async destroy(req, res) {
    const { id } = req.params;
    try {
      console.log(id);
      await teacherDao.destroyTeacher(id);
      res.status(201).json({ message: "success, Teacher deleted" });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

export const teacherController = new TeacherController();
